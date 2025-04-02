import React from 'react';

const VideoContent = ({ conteudo }) => {
    return (
        <div>
            {conteudo.map((item, index) => (
                item.tipo === 'video' && (
                    <div key={index}>
                        <h3>Vídeo</h3>
                        <video controls src={item.link}></video>
                    </div>
                )
            ))}
        </div>
    );
};

export default VideoContent;