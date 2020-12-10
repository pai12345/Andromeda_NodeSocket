class Chat {
  disconnect_socket(data: any) {
    console.log("user has been disconnected", data);
    return "user has been disconnected";
  }
  userjoined_socket(data: any) {
    console.log("user has joined the chat", data);
    return "user has joined the chat";
  }
  chatmessage_socket(data_message: any) {
    console.log("Message:", data_message);
    return `Message:${data_message}`;
  }
}

const oServe_Chat = new Chat();
export default oServe_Chat;
