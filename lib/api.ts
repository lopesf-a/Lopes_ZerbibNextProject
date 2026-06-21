import type { Comment, Post, Todo, User } from './types';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Fonction de délai réseau simulé.
// Si ton sujet fournit une fonction précise, remplace uniquement cette fonction par celle du sujet.
export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchJson<T>(path: string, delayMs: number, options?: { shouldFail?: boolean }) {
  await wait(delayMs);

  if (options?.shouldFail) {
    throw new Error(`Erreur simulée sur ${path}`);
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error(`Erreur HTTP ${response.status} sur ${path}`);
  }

  return response.json() as Promise<T>;
}

export async function getUsers() {
  return fetchJson<User[]>('/users', 1000);
}

export async function getPosts() {
  const posts = await fetchJson<Post[]>('/posts', 2000);
  return posts.slice(0, 10);
}

export async function getTodos() {
  return fetchJson<Todo[]>('/todos?userId=1', 3000);
}

export async function getComments() {
  // Le sujet demande de simuler une erreur sur CommentsBlock.
  return fetchJson<Comment[]>('/comments?postId=1', 1500, { shouldFail: true });
}
