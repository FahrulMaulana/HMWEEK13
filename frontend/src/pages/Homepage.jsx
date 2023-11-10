import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";
 


export default function Homepage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, []);

  return (
    <><h1 style={{paddingTop: "30px", paddingBottom: "10px"}}><b>List Books</b></h1>
      <Grid templateColumns="repeat(4, 1fr)" gap={4} w="100%">
      {books?.books?.map((book) => (
        <Books key={`${book.id} ${book.title}`} {...book} />
      ))}
      </Grid>
      </>
  );
}
