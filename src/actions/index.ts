'use server';

import * as auth from '../auth';

export async function signIn() {
    // pass name of sign in provider in string
    return auth.signIn('github');
}

export async function signOut() {
    return auth.signOut();
}