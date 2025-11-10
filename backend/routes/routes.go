package routes

import (
	"net/http"

	"case-itau/handlers"
)

func RegisterRoutes(mux *http.ServeMux) {
	mux.HandleFunc("/api/login", handlers.LoginHandler)
}
