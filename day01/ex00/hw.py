#!/usr/bin/env python3

# import textwrap
# from six.moves.BaseHTTPServer import BaseHTTPRequestHandle, HTTPServer
#
# class HelloWorldRequestHandler(BaseHTTPRequestHandle):
#     """
#     Creates a request handler to print "Hello world!"
#     """
#     def do_GET(self):
#         if self.path != '/':
#             self.send_error(404, 'Object not found')
#             return
#         self.send_response(200)
#         self.send_header('Content-type',  'text/html; charset=utf-8')
#         self.end_headers()
#         response_text = textwrap.dedent('''\
#             <!DOCTYPE html>
#             <html lang="en" dir="ltr">
#               <head>
#                 <meta charset="utf-8">
#                 <title></title>
#               </head>
#               <body>
#                 <h1>Hello world!</h1>
#               </body>
#             </html>
#         ''')
#         self.wfile.write(response_text.encode('utf-8'))
#
# # Define server address, httpd server, and run it forever and ever.
# server_adresss = ('', 8000)
# httpd = HTTPServer(server_adresss, HelloWorldRequestHandler)
# httpd.serve_forever()

print("Hello world!")
