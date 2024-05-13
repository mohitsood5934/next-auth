'use client';
import {
    Input,
} from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { search } from "../actions";

export default function SearchInput() {
    const searchParams = useSearchParams();
    console.log('render search input!');


    return (
        <form action={search}>
            <Input name="term" defaultValue={searchParams.get('term') || ''} />
        </form>

    )
}