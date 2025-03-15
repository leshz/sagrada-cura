FROM node:18

# Instalar paquetes necesarios
RUN apt-get update && apt-get install -y \
    git \
    zsh \
    nano \
    openssh-client \
    fonts-powerline \
    wget \
    && rm -rf /var/lib/apt/lists/*

# Cambiar el shell por defecto a Zsh
SHELL ["/bin/zsh", "-c"]

# Instalar Powerline fonts
RUN git clone https://github.com/powerline/fonts.git && \
    cd fonts && \
    ./install.sh && \
    cd .. && rm -rf fonts

# Instalar Oh My Zsh y plugins
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true && \
    git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions && \
    git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# Configurar tema Agnoster
RUN mv ~/.zshrc ~/.zshrc.bak && \
    sh -c "$(wget -O- https://raw.githubusercontent.com/deluan/zsh-in-docker/master/zsh-in-docker.sh)" -- -t agnoster && \
    rm -f ~/.zshrc && \
    mv ~/.zshrc.bak ~/.zshrc && \
    sed -i '/^ZSH_THEME/c\ZSH_THEME="agnoster"' ~/.zshrc

# Comando por defecto
CMD ["zsh"]

# # Instalar paquetes necesarios
# RUN apt-get update && apt-get install -y \
#     git \
#     zsh \
#     openssh-client \
#     && rm -rf /var/lib/apt/lists/*

# # Cambiar el shell por defecto a Zsh
# SHELL ["/bin/zsh", "-c"]

# # Comando por defecto
# CMD ["zsh"]





# FROM node:18

# RUN apt-get update
# # Install dependencies
# RUN apt-get install -y wget git 
# # Install oh-my-zsh
# # RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh \
# #   && cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc