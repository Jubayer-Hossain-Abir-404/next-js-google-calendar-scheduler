"use client";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { eventFormSchema } from "@/schema/events"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"


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
            <form onSubmit={form.handleSubmit(onSubmit)}>
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
            </form>
        </Form>
    )
}