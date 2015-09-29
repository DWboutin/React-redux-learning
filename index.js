import server from "./src/server";

const APP_PORT = 3000;

server.listen(APP_PORT, function(e){
  if(e){
    console.error(e);
  }

  console.log('Server listening on ', APP_PORT);
});