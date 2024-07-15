// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fs;
use std::collections::HashMap;
use serde_json::Value;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn convert_txt_to_json(file_path: String) -> Result<Value, String> {
    // Leer el archivo
    let content = fs::read_to_string(&file_path).map_err(|e| e.to_string())?;
    
    // Separar las líneas
    let lines: Vec<&str> = content.split('\n').filter(|line| !line.is_empty()).collect();
    
    // Verificar que haya líneas en el archivo
    if lines.is_empty() {
        return Err("El archivo está vacío".to_string());
    }
    
    // Separar los encabezados
    let headers: Vec<&str> = lines[0].split('|').collect();

    // Inicializar el vector para almacenar los datos
    let mut data = Vec::new();

    // Procesar cada línea del archivo
    for line in lines.iter().skip(1) {
        let values: Vec<&str> = line.split('|').collect();
        if values.len() == headers.len() {
            let mut record = HashMap::new();
            for (header, value) in headers.iter().zip(values.iter()) {
                record.insert(header.to_string(), value.to_string());
            }
            data.push(record);
        } else {
            return Err(format!("La línea no coincide con los encabezados: {}", line));
        }
    }

    // Convertir el vector a JSON
    let json = serde_json::to_value(data).map_err(|e| e.to_string())?;
    Ok(json)
}


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, convert_txt_to_json])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
