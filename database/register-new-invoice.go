package main

import (
	"net/http"

	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
)

func registerNewInvoice(e *core.ServeEvent, app *pocketbase.PocketBase) {
	e.Router.AddRoute(echo.Route{
		Method: http.MethodGet,
		Path:   "/ezbiz/new-invoice",
		Handler: func(c echo.Context) error {
			return c.JSON(http.StatusOK, "Hello World")
		},
		Middlewares: []echo.MiddlewareFunc{
			apis.ActivityLogger(app),
			apis.RequireRecordAuth("users"),
		},
	})
}
