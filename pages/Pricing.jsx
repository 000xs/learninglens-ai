import Link from 'next/link'
import { Brain, Check } from 'lucide-react'
import Navigationbar from './components/navigationbar'

export default function PricingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigationbar />
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
                            Simple, Transparent Pricing
                        </h1>
                        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Choose the plan that&apos;s right for you and start summarizing documents with LearningLens AI today.
                        </p>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-center mb-4">Basic</h3>
                                <p className="text-center text-gray-600 mb-4">Perfect for individuals and small teams</p>
                                <p className="text-4xl font-bold text-center mb-6">$9.99<span className="text-xl font-normal">/month</span></p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-green-500 mr-2" />
                                        <span>Up to 100 pages/month</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-green-500 mr-2" />
                                        <span>Basic summarization</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-green-500 mr-2" />
                                        <span>Email support</span>
                                    </li>
                                </ul>
                                <button className="mt-auto py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                    Get Started
                                </button>
                            </div>
                            <div className="flex flex-col p-6 bg-blue-600 text-white rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-center mb-4">Pro</h3>
                                <p className="text-center opacity-90 mb-4">Ideal for growing businesses</p>
                                <p className="text-4xl font-bold text-center mb-6">$24.99<span className="text-xl font-normal">/month</span></p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-green-300 mr-2" />
                                        <span>Up to 500 pages/month</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-green-300 mr-2" />
                                        <span>Advanced summarization</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-green-300 mr-2" />
                                        <span>Priority email support</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-green-300 mr-2" />
                                        <span>API access</span>
                                    </li>
                                </ul>
                                <button className="mt-auto py-2 px-4 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors">
                                    Get Started
                                </button>
                            </div>
                            <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-center mb-4">Enterprise</h3>
                                <p className="text-center text-gray-600 mb-4">For large organizations with custom needs</p>
                                <p className="text-4xl font-bold text-center mb-6">Custom</p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-green-500 mr-2" />
                                        <span>Unlimited pages</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-green-500 mr-2" />
                                        <span>Custom AI models</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-green-500 mr-2" />
                                        <span>24/7 phone & email support</span>
                                    </li>
                                    <li className="flex items-center">
                                        <Check className="h-5 w-5 text-green-500 mr-2" />
                                        <span>Dedicated account manager</span>
                                    </li>
                                </ul>
                                <button className="mt-auto py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                    Contact Sales
                                </button>
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

