import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY)
export const GET:APIRoute = async ({params, request}) => {
    return new Response(
        JSON.stringify({
            name: "Astro",
            url: "https://astro.build"
        })
    )
}