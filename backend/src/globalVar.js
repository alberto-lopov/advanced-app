//Authorized username to fecth and display data about pokemon
export const userAuthorized = "alberto";

//Address to MongoDB
const protocol = "mongodb://";
const auth = "albertolp:albertolp@"
const uri = "localhost:27017"
const pathDB = "/pokemondb";
const connectionOptions = "?authSource=admin"

export const urlDB = protocol+auth+uri+pathDB+connectionOptions;