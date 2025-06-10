"use client";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { eventFormSchema } from "@/schema/events"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button";
import Link from "next/link";


export function EventForm() {
    const form = useForm<z.infer<typeof eventFormSchema>>({
        resolver: zodResolver(eventFormSchema),
        defaultValues: {
            isActive: true,
            durationInMinutes: 30,
        },
    })

    function onSubmit(values: z.infer<typeof eventFormSchema>) {
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} 
            className="flex gap-6 flex-col">
                <FormField 
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Event Name</FormLabel>
                        <FormControl>
                            <Input {...field}/>
                        </FormControl>

                        <FormDescription>
                            The name users will see when booking
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
                />

                <div className="flex gap-2 justify-end">
                    <Button type="button" asChild variant="outline">
                        <Link href="/events">Cancel</Link>
                    </Button>

                    <Button type="submit">
                        Save
                    </Button>
                </div>
            </form>
        </Form>
    )
}