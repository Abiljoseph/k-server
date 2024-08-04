import user from "../models/user.model.js";

export const SignUp = async (req, res) => {
  const { username, email, password } = req.body;
  const newuser = new user({ username, email, password });
  try {
    await newuser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const SignIn = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    const user1 = await user.findOne({ email });
    if (!user1) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user1.password !== password) {
      return res
        .status(400)
        .json({ message: "Incorrect username or password" });
    }

    return res.status(200).json({ message: "User logged in successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
