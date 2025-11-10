package main

import (
	"log"
	"net/http"
	"github.com/rs/cors"
	"case-itau/handlers"
)

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/login", handlers.LoginHandler)

	handler := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5173"},
		AllowedMethods:   []string{"GET", "POST", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
	}).Handler(mux)

	log.Println("Servidor rodando em http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", handler))
}
