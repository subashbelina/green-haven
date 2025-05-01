#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p src/assets/images

# Download images with proper quality and dimensions
curl -L -o src/assets/images/landing-bg.jpg "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=85"
curl -L -o src/assets/images/header-bg.jpg "https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=400&q=85"
curl -L -o src/assets/images/monstera.jpg "https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=85"
curl -L -o src/assets/images/snake-plant.jpg "https://images.unsplash.com/photo-1620127252536-03bdfcf6d5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=85"
curl -L -o src/assets/images/pothos.jpg "https://images.unsplash.com/photo-1592170577795-db1ab2009688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=85"
curl -L -o src/assets/images/fiddle-leaf.jpg "https://images.unsplash.com/photo-1597055181300-e3633a207518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=85"
curl -L -o src/assets/images/succulent.jpg "https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=85"
curl -L -o src/assets/images/calathea.jpg "https://images.unsplash.com/photo-1602923668104-8f518f7d0f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=85"

echo "Images downloaded successfully!" 