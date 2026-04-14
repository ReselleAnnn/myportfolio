// import { useState, type FormEvent } from 'react'
// import { Mail, Phone, Send, MapPin, CheckCircle } from 'lucide-react'
// import { useScrollAnimation } from '@/hooks/useScrollAnimation'
// import { cn } from '@/lib/utils'

// export function Contact() {
//   const { ref, isVisible } = useScrollAnimation()
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     message: '',
//   })
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault()
//     // In production, this would send to an API
//     console.log('Form submitted:', formState)
//     setIsSubmitted(true)
//     setTimeout(() => {
//       setIsSubmitted(false)
//       setFormState({ name: '', email: '', message: '' })
//     }, 3000)
//   }

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: 'Email',
//       value: 'reselledugayo08@gmail.com',
//       href: 'mailto:reselledugayo08@gmail.com',
//     },
//     {
//       icon: Phone,
//       label: 'Phone',
//       value: '0915-0167-484',
//       href: 'tel:+639150167484',
//     },
//     {
//       icon: MapPin,
//       label: 'Location',
//       value: 'Philippines',
//       href: null,
//     },
//   ]

//   return (
//     <section id="contact" className="py-24 px-6">
//       <div
//         ref={ref}
//         className={cn(
//           'max-w-6xl mx-auto opacity-0',
//           isVisible && 'animate-slide-up'
//         )}
//       >
//         {/* Section Header */}
//         <div className="flex items-center gap-4 mb-8">
//           <span className="text-primary font-mono text-sm">07.</span>
//           <h2 className="text-2xl md:text-3xl font-bold text-foreground">Get In Touch</h2>
//           <div className="flex-1 h-px bg-border" />
//         </div>

//         <p className="text-muted-foreground mb-12 max-w-2xl">
//           {"I'm"} currently open to new opportunities and collaborations. Whether you have a 
//           project in mind or just want to say hello, {"I'd"} love to hear from you.
//         </p>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div className="space-y-6">
//             <h3 className="text-lg font-semibold text-foreground mb-6">Contact Information</h3>
            
//             {contactInfo.map((item) => (
//               <div key={item.label} className="flex items-center gap-4">
//                 <div className="p-3 rounded-lg bg-card border border-border">
//                   <item.icon className="w-5 h-5 text-primary" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-muted-foreground">{item.label}</p>
//                   {item.href ? (
//                     <a
//                       href={item.href}
//                       className="text-foreground hover:text-primary transition-colors font-medium"
//                     >
//                       {item.value}
//                     </a>
//                   ) : (
//                     <p className="text-foreground font-medium">{item.value}</p>
//                   )}
//                 </div>
//               </div>
//             ))}

//             Direct Email Button
//             <div className="pt-6">
//               <a
//                 href="mailto:reselledugayo08@gmail.com"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
//               >
//                 <Mail size={18} />
//                 Send Email Directly
//               </a>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="p-6 md:p-8 rounded-xl bg-card border border-border">
//             <h3 className="text-lg font-semibold text-foreground mb-6">Send a Message</h3>
            
//             {isSubmitted ? (
//               <div className="flex flex-col items-center justify-center py-12 text-center">
//                 <CheckCircle className="w-16 h-16 text-accent mb-4" />
//                 <h4 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h4>
//                 <p className="text-muted-foreground">{"I'll"} get back to you as soon as possible.</p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     value={formState.name}
//                     onChange={(e) => setFormState({ ...formState, name: e.target.value })}
//                     required
//                     className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
//                     placeholder="Your name"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     value={formState.email}
//                     onChange={(e) => setFormState({ ...formState, email: e.target.value })}
//                     required
//                     className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
//                     placeholder="your@email.com"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     value={formState.message}
//                     onChange={(e) => setFormState({ ...formState, message: e.target.value })}
//                     required
//                     rows={5}
//                     className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
//                     placeholder="Tell me about your project..."
//                   />
//                 </div>
                
//                 <button
//                   type="submit"
//                   className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
//                 >
//                   <Send size={18} />
//                   Send Message
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import { Mail, Phone, MapPin } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

export function Contact() {
  const { ref, isVisible } = useScrollAnimation()

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'reselledugayo08@gmail.com',
      href: 'mailto:reselledugayo08@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0915-0167-484',
      href: 'tel:+639150167484',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Philippines',
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-24 px-6">
      <div
        ref={ref}
        className={cn(
          'max-w-6xl mx-auto opacity-0',
          isVisible && 'animate-slide-up'
        )}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-primary font-mono text-sm">07.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground bg-gradient-to-r from-primary/80 via-foreground to-secondary/70 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <p className="text-muted-foreground mb-8 whitespace-nowrap">
          I'm currently open to new opportunities and collaborations.
          Whether you have a project in mind or just want to say hello,
          I'd love to hear from you.
        </p>

        {/* Contact Info Only */}
        <div className="space-y-6 max-w-xl">
          {contactInfo.map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-card border border-border">
                <item.icon className="w-5 h-5 text-primary" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>

                {item.href ? (
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground font-medium">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



