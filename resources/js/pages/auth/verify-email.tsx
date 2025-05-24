import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { usePageActions } from '@/contexts/page-context';

export default function VerifyEmail({ status }: { status?: string }) {
    const { t } = useTranslation();
    const { setAuthInfo } = usePageActions();
    const { post, processing } = useForm({});

    useEffect(() => {
        setAuthInfo(
            t('Verify email'),
            t('Please verify your email address by clicking on the link we just emailed to you.')
        );
    }, [setAuthInfo, t]);

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <>
            <Head title={t('Email verification')} />

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    {t('A new verification link has been sent to the email address you provided during registration.')}
                </div>
            )}

            <form onSubmit={submit} className="flex flex-col gap-6 text-center">
                <Button disabled={processing} variant="secondary" tabIndex={1}>
                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                    {t('Resend verification email')}
                </Button>

                <div className="text-center">
                    <TextLink href={route('logout')} method="post" className="text-sm" tabIndex={2}>
                        {t('Log out')}
                    </TextLink>
                </div>
            </form>
        </>
    );
}
