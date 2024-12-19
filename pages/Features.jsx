import Link from 'next/link'
import { FileText, Zap, Clock, Brain, Target, Lock, BarChart } from 'lucide-react'
import Navigationbar from './components/navigationbar'

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigationbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
              LearningLens AI Features
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Discover how LearningLens AI can revolutionize your document summarization process with our cutting-edge features.
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                <FileText className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">Intelligent Summarization</h3>
                <p className="text-sm text-gray-500 text-center">
                  Our AI analyzes and condenses documents while retaining key information, ensuring you get the most important points quickly.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                <Zap className="h-12 w-12 text-yellow-500" />
                <h3 className="text-xl font-bold">Lightning Fast</h3>
                <p className="text-sm text-gray-500 text-center">
                  Get summaries in seconds, no matter the document length. Save time and increase productivity.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                <Clock className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Time-Saving</h3>
                <p className="text-sm text-gray-500 text-center">
                  Spend less time reading and more time understanding and acting on information. Perfect for busy professionals.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                <Target className="h-12 w-12 text-red-500" />
                <h3 className="text-xl font-bold">Customizable Summaries</h3>
                <p className="text-sm text-gray-500 text-center">
                  Adjust summary length and focus to get exactly the information you need, tailored to your preferences.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                <Lock className="h-12 w-12 text-purple-500" />
                <h3 className="text-xl font-bold">Secure and Private</h3>
                <p className="text-sm text-gray-500 text-center">
                  Your documents are processed with state-of-the-art encryption, ensuring your sensitive information remains confidential.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                <BarChart className="h-12 w-12 text-indigo-500" />
                <h3 className="text-xl font-bold">Analytics and Insights</h3>
                <p className="text-sm text-gray-500 text-center">
                  Gain valuable insights from your documents with our advanced analytics tools, helping you make data-driven decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 LearningLens AI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

