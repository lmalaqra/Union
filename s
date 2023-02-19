server  

{ 
        listen   80; 
        server_name 139.162.167.150; 
 
        location /  

{ 
                proxy_set_header X-Real-IP $remote_addr; 
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
                proxy_set_header Host $host; 
                proxy_set_header X-NginX-Proxy true; 
                proxy_pass http://localhost:8000/; 
                proxy_redirect http://localhost:8000/ https://$server_name/; 
        } 
}


sudo ln -s /etc/nginx/sites-available/myserver /etc/nginx/sites-enabled/
