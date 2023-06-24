const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const key = 'D3ER3tCYubrWMa9QSpcS';
const GET_BOOKS = `${baseUrl}/apps/${key}/books`;
const POST_BOOK = `${baseUrl}/apps/${key}/books`;
const DEL_BOOK = `${baseUrl}/apps/${key}/books`;

export { GET_BOOKS, POST_BOOK, DEL_BOOK };
export default baseUrl;
