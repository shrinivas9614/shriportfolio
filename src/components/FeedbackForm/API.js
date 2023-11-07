import axios from "axios";
import { API_POST_URL } from "./baseUrl";

const FeedbackForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${API_POST_URL}/submit-form`, form);

      // Handle the response as needed
      console.log("Server response:", response.data);
      // You can reset the form and show a success message to the user here.
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle the error, e.g., show an error message to the user.
    }

    setLoading(false);
  };
};
