"use client" // if you're using Next.js app directory and this is a client component

import * as React from "react"
import { cn } from "@/components/smackathon/FAQ/lib/utils"  // assume this is your utility to combine class names

// Base Card container - div with rounded corners, border, shadow, and background
const Card = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

// CardHeader - container for title and description, vertical spacing
const CardHeader = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

// CardTitle - styled title text
const CardTitle = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

// CardDescription - styled description text (smaller, muted)
const CardDescription = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
)
CardDescription.displayName = "CardDescription"

// CardContent - content area with padding (except top padding is zero)
const CardContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

// CardFooter - footer area with flex items and padding (top padding zero)
const CardFooter = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

// Export components
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }


// Example usage (optional):
/*
function Example() {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a description for the card.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Here is the main content of the card.</p>
      </CardContent>
      <CardFooter>
        <button className="btn-primary">Action</button>
      </CardFooter>
    </Card>
  )
}
*/
