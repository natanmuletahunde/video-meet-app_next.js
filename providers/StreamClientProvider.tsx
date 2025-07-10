import {
StreamVideoClient,
  StreamVideo,

} from "@stream-io/video-react-sdk";

const apiKey = "process.env.NEXT_PUBLIC_STREAM_API_KEY"; // Replace with your actual API key

const StreamVideoProvider = ( children) => {
  return (
    <StreamVideo client={client}>
               
    </StreamVideo>
  );
};
export default StreamVideoProvider;
