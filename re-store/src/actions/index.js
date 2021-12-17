const bookLoaded = (newBook) => {
  return {
    type: 'BOOK_LOADED',
    loaded: newBook
  }
}

export {bookLoaded} 