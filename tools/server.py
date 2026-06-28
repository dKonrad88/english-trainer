#!/usr/bin/env python3
"""Servidor estático mínimo para preview (evita os.getcwd, bloqueado no sandbox)."""
import http.server
import socketserver
import functools

DIRECTORY = "/Users/diegokonrad/Documents/Hub Pessoal vCode/english-trainer"
PORT = 8753

Handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIRECTORY)
with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    httpd.serve_forever()
