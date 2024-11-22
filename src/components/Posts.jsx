import React, { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      // Simular um atraso de 2 segundos
      setTimeout(() => {
        setPosts(data);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
      setIsLoading(false); // Garantir que o indicador de carregamento seja removido em caso de erro
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <h2>Lista de Posts</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
          <button onClick={fetchPosts}>Recarregar</button>
        </>
      )}
    </div>
  );
}

export default Posts;
