import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { MessageCircle, Phone, PhoneCall, Mic, MicOff, Send, VolumeX } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import  SimpleGlobe  from "@/app/components/ui/SimpleGlobe";

interface AgentDemoProps {
    activeAgent: "chat" | "call";
}

export const AgentDemo = ({ activeAgent }: AgentDemoProps) => {
    const [chatMessages, setChatMessages] = useState<Message[]>([])
    const [isTyping, setIsTyping] = useState(false)
    const [isCallActive, setIsCallActive] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [callLogs, setCallLogs] = useState<CallLog[]>([])
    const [isRecording, setIsRecording] = useState(false)
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [synthesis, setSynthesis] = useState<SpeechSynthesis | null>(null)
    const [inputMessage, setInputMessage] = useState("")
    const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null)
    const callContainerRef = useRef<HTMLDivElement>(null)

    const chatResponses = [
        "Hello! I'm your AI assistant. How can I help you today?",
        "I'd be happy to help you with that. Let me check our available options.",
        "Based on your requirements, I can suggest a few solutions that might work perfectly for you.",
        "Would you like me to schedule a demo call to show you how this works?",
        "Great! I've noted your preferences. Is there anything else you'd like to know?",
    ]

    // Mock call responses
    const callResponses = [
        "Hi there! Thanks for calling SniperThink. I'm your AI calling agent.",
        "I understand you're interested in our services. Let me help you with that.",
        "That's a great question! Our platform can definitely handle that use case.",
        "I'd love to connect you with our sales team for a personalized demo.",
        "Perfect! I'll send you all the information via email right away.",
    ]

    interface Message {
        id: string
        text: string
        isUser: boolean
        timestamp: Date
    }

    interface CallLog {
        id: string
        text: string
        isUser: boolean
        timestamp: Date
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Speech Recognition
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
            if (SpeechRecognition) {
                const recognitionInstance = new SpeechRecognition()
                recognitionInstance.continuous = false
                recognitionInstance.interimResults = false
                recognitionInstance.lang = "en-US"
                setRecognition(recognitionInstance)
            }

            // Speech Synthesis
            if (window.speechSynthesis) {
                setSynthesis(window.speechSynthesis)
            }
        }
    }, [])

    const sendChatMessage = async () => {
        if (!inputMessage.trim()) return

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputMessage,
            isUser: true,
            timestamp: new Date(),
        }

        setChatMessages((prev) => [...prev, userMessage])
        setInputMessage("")
        setIsTyping(true)

        // Simulate AI response delay
        setTimeout(() => {
            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: chatResponses[Math.floor(Math.random() * chatResponses.length)],
                isUser: false,
                timestamp: new Date(),
            }
            setChatMessages((prev) => [...prev, aiResponse])
            setIsTyping(false)
        }, 1500)
    }



    const startRecording = () => {
        if (!recognition) return

        setIsRecording(true)
        recognition.start()

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript
            const userMessage: CallLog = {
                id: Date.now().toString(),
                text: `You said: "${transcript}"`,
                isUser: true,
                timestamp: new Date(),
            }
            setCallLogs((prev) => [...prev, userMessage])

            // Generate AI response
            setTimeout(() => {
                const aiResponseText = callResponses[Math.floor(Math.random() * callResponses.length)]
                const aiResponse: CallLog = {
                    id: (Date.now() + 1).toString(),
                    text: aiResponseText,
                    isUser: false,
                    timestamp: new Date(),
                }
                setCallLogs((prev) => [...prev, aiResponse])

                // Speak AI response
                if (synthesis) {
                    setIsSpeaking(true)
                    const utterance = new SpeechSynthesisUtterance(aiResponseText)
                    utterance.rate = 0.9
                    utterance.pitch = 1
                    utterance.volume = 0.8
                    utterance.onend = () => setIsSpeaking(false)
                    synthesis.speak(utterance)
                }
            }, 1000)
        }

        recognition.onend = () => {
            setIsRecording(false)
        }

        recognition.onerror = () => {
            setIsRecording(false)
        }
    }

    const stopSpeaking = () => {
        if (synthesis) {
            synthesis.cancel()
            setIsSpeaking(false)
        }
    }

    const startCall = () => {
        setIsCallActive(true)
        const welcomeMessage: CallLog = {
            id: Date.now().toString(),
            text: "Call connected! AI agent is ready to assist you.",
            isUser: false,
            timestamp: new Date(),
        }
        setCallLogs([welcomeMessage])

        // Speak welcome message
        if (synthesis) {
            const utterance = new SpeechSynthesisUtterance("Call connected! AI agent is ready to assist you.")
            utterance.rate = 0.9
            utterance.pitch = 1
            utterance.volume = 0.8
            synthesis.speak(utterance)
        }
    }

    const endCall = () => {
        setIsCallActive(false)
        setIsRecording(false)
        const endMessage: CallLog = {
            id: Date.now().toString(),
            text: "Call ended. Thank you for using SniperThink!",
            isUser: false,
            timestamp: new Date(),
        }
        setCallLogs((prev) => [...prev, endMessage])

        // Speak goodbye message
        if (synthesis) {
            const utterance = new SpeechSynthesisUtterance("Call ended. Thank you for using SniperThink!")
            synthesis.speak(utterance)
        }
    }


    return (
        <section id="agent-demo" className="px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white/2 border border-white/8 rounded-3xl shadow-2xl p-8 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-500">
                    {activeAgent === "chat" ? (
                        // Chat Interface
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#1A6262] to-[#91C499] rounded-full flex items-center justify-center">
                                        <MessageCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#91C499]">SniperThink Chat AI</h3>
                                        <p className="text-sm text-green-400 flex items-center">
                                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse inline-block"></span>
                                            Online & Ready
                                        </p>
                                    </div>
                                </div>
                                <Badge className="bg-[#91C499]/20 text-[#91C499] px-4 py-2 border border-[#91C499]/30">
                                    Live Demo
                                </Badge>
                            </div>

                            <div
                                ref={chatContainerRef}
                                className="h-96 overflow-y-auto mb-6 space-y-4 bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm"
                                style={{ scrollBehavior: "smooth" }}
                            >
                                {chatMessages.length === 0 && (
                                    <div className="text-center text-gray-400 py-16">
                                        <MessageCircle className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                                        <h4 className="text-lg font-medium mb-2 text-gray-300">
                                            Start a conversation with our AI agent!
                                        </h4>
                                        <p className="text-sm">Try asking about our features, pricing, or schedule a demo.</p>
                                    </div>
                                )}

                                <div className="absolute inset-0 w-full h-full">
                                    <SimpleGlobe />
                                </div>

                                {isTyping && (
                                    <div className="flex justify-start animate-pulse">
                                        <div className="bg-gray-700 px-6 py-4 rounded-2xl shadow-lg border border-gray-600">
                                            <div className="flex space-x-1">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex space-x-3">
                                <Input
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    placeholder="Type your message here..."
                                    className="flex-1 rounded-xl border-gray-600 bg-gray-700 text-white placeholder:text-gray-400 focus:border-[#1A6262] py-3 px-4 text-base"
                                    onKeyPress={(e) => e.key === "Enter" && sendChatMessage()}
                                />
                                <Button
                                    onClick={sendChatMessage}
                                    className="bg-gradient-to-r from-[#1A6262] to-[#91C499] hover:from-[#91C499] hover:to-[#1A6262] text-white px-8 rounded-xl"
                                >
                                    <Send className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    ) : (
                        // Call Interface
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#E1A940] to-[#FF6700] rounded-full flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#E1A940]">SniperThink Call AI</h3>
                                        <p className="text-sm text-green-400 flex items-center">
                                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                            {isCallActive ? "In Call" : "Ready to Call"}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Badge className="bg-[#E1A940]/20 text-[#E1A940] px-4 py-2 border border-[#E1A940]/30">
                                        Voice AI
                                    </Badge>
                                    {isCallActive && (
                                        <Badge
                                            className={`px-3 py-1 ${isSpeaking ? "bg-green-900/50 text-green-300 border-green-700" : "bg-gray-700 text-gray-300 border-gray-600"}`}
                                        >
                                            {isSpeaking ? "AI Speaking" : "Ready"}
                                        </Badge>
                                    )}
                                </div>
                            </div>

                            <div
                                ref={callContainerRef}
                                className="h-96 overflow-y-auto mb-6 space-y-4 bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm"
                                style={{ scrollBehavior: "smooth" }}
                            >
                                {callLogs.length === 0 && !isCallActive && (
                                    <div className="text-center text-gray-400 py-16">
                                        <Phone className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                                        <h4 className="text-lg font-medium mb-2 text-gray-300">Start a call with our AI agent!</h4>
                                        <p className="text-sm">Experience natural voice conversations with advanced AI.</p>
                                    </div>
                                )}

                                {callLogs.map((log) => (
                                    <div key={log.id} className={`flex ${log.isUser ? "justify-end" : "justify-start"} animate-fadeIn`}>
                                        <div className="relative">
                                            <div
                                                className={`max-w-md px-6 py-4 rounded-2xl ${log.isUser
                                                    ? "bg-gradient-to-r from-[#E1A940] to-[#FF6700] text-white"
                                                    : "bg-gray-700 text-gray-100 shadow-lg border border-gray-600"
                                                    }`}
                                            >
                                                <p className="text-sm leading-relaxed">{log.text}</p>
                                                <p className="text-xs opacity-70 mt-2">{log.timestamp.toLocaleTimeString()}</p>
                                            </div>
                                            {!log.isUser && (
                                                <div className="absolute w-0 h-0 bottom-0 right-6 border-r-4 border-b-4 border-transparent border-b-gray-700"></div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex space-x-3">
                                {!isCallActive ? (
                                    <Button
                                        onClick={startCall}
                                        className="flex-1 bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] text-white py-4 rounded-xl text-lg"
                                    >
                                        <PhoneCall className="w-5 h-5 mr-2" />
                                        Start Call
                                    </Button>
                                ) : (
                                    <>
                                        <Button
                                            onMouseDown={startRecording}
                                            onMouseUp={() => recognition?.stop()}
                                            onTouchStart={startRecording}
                                            onTouchEnd={() => recognition?.stop()}
                                            disabled={isSpeaking}
                                            className={`flex-1 py-4 rounded-xl ${isRecording
                                                ? "bg-red-500 hover:bg-red-600 text-white animate-pulse"
                                                : "bg-[#91C499] hover:bg-[#91C499]/80 text-white"
                                                }`}
                                        >
                                            <Mic className="w-5 h-5 mr-2" />
                                            {isRecording ? "Recording..." : "Hold to Speak"}
                                        </Button>
                                        <Button
                                            onClick={() => setIsMuted(!isMuted)}
                                            variant="outline"
                                            className="px-6 py-4 rounded-xl border-gray-600 text-gray-300 hover:bg-gray-700"
                                        >
                                            {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                                        </Button>
                                        {isSpeaking && (
                                            <Button
                                                onClick={stopSpeaking}
                                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-4 rounded-xl"
                                            >
                                                <VolumeX className="w-5 h-5" />
                                            </Button>
                                        )}
                                        <Button onClick={endCall} className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl">
                                            End Call
                                        </Button>
                                    </>
                                )}
                            </div>

                            {isCallActive && (
                                <div className="mt-4 text-center text-sm text-gray-400">
                                    <p>
                                        💡 Hold "Hold to Speak" button and speak into your microphone. The AI will respond with voice.
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}