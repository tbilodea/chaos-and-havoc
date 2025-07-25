
# Point to your own openssl - this one was installed with git
& 'C:\\Program Files\\Git\\usr\\bin\\openssl.exe' genrsa -out private.pem 2048
& 'C:\\Program Files\\Git\\usr\\bin\\openssl.exe' x509 -new -key 'private.pem' -out 'cert.pem' -days 365 -subj '/C=US/ST=CO/L=Denver/O=Animation Supporters Inc'