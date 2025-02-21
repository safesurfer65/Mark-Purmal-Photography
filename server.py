import http.server
import socketserver
import os
import mimetypes

# Add additional MIME types
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('text/html', '.html')

PORT = 8000
DIRECTORY = "out"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')
        # Add caching headers
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def guess_type(self, path):
        # Override the MIME type for JavaScript files
        if path.endswith('.js'):
            return 'application/javascript'
        if path.endswith('.css'):
            return 'text/css'
        return super().guess_type(path)

    def do_GET(self):
        # Handle root path
        if self.path == '/':
            self.path = '/index.html'
        elif not '.' in self.path:
            self.path = f"{self.path}/index.html"
        return super().do_GET()

def run_server():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving at http://localhost:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server...")
            httpd.shutdown()

if __name__ == "__main__":
    if not os.path.exists(DIRECTORY):
        print(f"Error: '{DIRECTORY}' directory not found.")
        print("Please make sure you have built the Next.js project with 'npm run build'")
        exit(1)
    
    print(f"Starting server from '{DIRECTORY}' directory...")
    run_server() 