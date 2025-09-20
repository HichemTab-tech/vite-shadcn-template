import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Github, Linkedin, Twitter, Mail, ExternalLink} from "lucide-react"

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            HichemTab-tech
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8">React + Vite + React Router + shadcn/ui
                            Template</p>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    {/* Main Content */}
                    <Card className="mb-12 border-0 shadow-lg">
                        <CardContent className="p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-6">
                                    <div className="text-left">
                                        <h2 className="text-2xl font-semibold mb-4">Welcome to my template!</h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            This template was created following the{" "}
                                            <a
                                                href="https://ui.shadcn.com/docs/installation/vite"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline"
                                            >
                                                 shadcn/ui Vite
                                            </a>

                                            {" "}&{" "}

                                            <a
                                                href="https://reactrouter.com/start/declarative/routing"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline"
                                            >
                                                react router
                                            </a>

                                            {" "}installation guide

                                            . Nothing extra added - just the ready setup so you don't have to go through
                                            the installation
                                            steps yourself!
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        <span
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">React</span>
                                        <span
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Vite</span>
                                        <span
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      shadcn/ui
                    </span>
                                        <span
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Tailwind CSS
                    </span>
                                        <span
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      TypeScript
                    </span>
                                        <span
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      React Router
                    </span>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <div
                                        className="w-48 h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                                        <img alt="HichemTab-tech's pdp" src="https://www.hichemtab-tech.me/pdp.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Links Section */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                        <Button variant="outline" size="lg" className="h-16 flex-col gap-2 bg-transparent" asChild>
                            <a href="https://github.com/HichemTab-tech" target="_blank" rel="noopener noreferrer">
                                <Github className="w-6 h-6"/>
                                <span>GitHub</span>
                            </a>
                        </Button>

                        <Button variant="outline" size="lg" className="h-16 flex-col gap-2 bg-transparent" asChild>
                            <a href="https://www.linkedin.com/in/hichem-taboukouyout" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-6 h-6"/>
                                <span>LinkedIn</span>
                            </a>
                        </Button>

                        <Button variant="outline" size="lg" className="h-16 flex-col gap-2 bg-transparent" asChild>
                            <a href="https://twitter.com/hichemtab1" target="_blank" rel="noopener noreferrer">
                                <Twitter className="w-6 h-6"/>
                                <span>Twitter</span>
                            </a>
                        </Button>

                        <Button variant="outline" size="lg" className="h-16 flex-col gap-2 bg-transparent" asChild>
                            <a href="mailto:hichem.taboukouyout@hichemtab-tech.me">
                                <Mail className="w-6 h-6"/>
                                <span>Email</span>
                            </a>
                        </Button>
                    </div>

                    {/* Footer */}
                    <div className="text-center text-muted-foreground">
                        <p className="flex items-center justify-center gap-2 text-sm">
                            Built with ❤️ by HichemTab-tech
                            <ExternalLink className="w-4 h-4"/>
                        </p>
                        <p className="text-xs mt-2">
                            Get started by editing <code
                            className="bg-muted px-2 py-1 rounded text-xs">app/page.tsx</code>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}