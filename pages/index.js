import Card   from '../components/ui/card';
import Input  from '../components/ui/input';
import Button from '../components/ui/button';
import { useState } from "react";

export default function LinearSafetySentinel() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const handleScan = () => {
    const input = userInput.toLowerCase();
    if (input.includes("linear") && input.includes("team")) {
      setResponse(
        "Warning: You may be in a workspace you didn't create. Check admin status, confirm workspace ownership, and verify integration permissions."
      );
    } else if (input.includes("telegram") || input.includes("whatsapp")) {
      setResponse(
        "Caution: Rapid platform shifts signal social‑engineering risk. Always verify identity and purpose across channels."
      );
    } else if (input.includes("group call") || input.includes("google meet")) {
      setResponse(
        "Tip: Low‑camera‑visibility calls often cloak false authority. Ask for verifiable links and credentials."
      );
    } else {
      setResponse(
        "Input received. No immediate red flags. Stay alert and validate every access request."
      );
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Card className="shadow-lg rounded-2xl">
        <CardContent className="space-y-4">
          <h1 className="text-xl font-bold">Linear Safety Sentinel</h1>
          <p className="text-base text-gray-600">
            Paste a message, invite, or situation you’re unsure about. The
            Sentinel scans for risk instantly.
          </p>
          <Input
            placeholder="Paste your scenario here..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <Button onClick={handleScan}>Scan</Button>
          {response && (
            <div className="mt-4 p-4 bg-gray-100 rounded-xl text-sm text-gray-800">
              {response}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}