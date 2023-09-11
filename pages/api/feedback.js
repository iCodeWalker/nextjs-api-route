// from here we don't export a react component,
// instead we create a function to handle incoming request,
// this function receives two arguments : request object and response object
import fs from "fs";
import path from "path";

function handler(req, res) {
  // here we can execute any server side code
  // any code we write here will never end up in client side code bundling, just as code written in
  // getServerSideProps.

  if (req.method == "POST") {
    const email = req.body.email;
    const text = req.body.text;

    const newFeedbackObj = {
      id: new Date().toISOString(),
      email: email,
      text: text,
    };

    // Store in database or in a file
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);

    const data = JSON.parse(fileData);

    data.push(newFeedbackObj);

    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: "Success", feedback: newFeedbackObj });
  } else {
    res.status(200).json({
      message: "This Works",
    });
  }
}

export default handler;
