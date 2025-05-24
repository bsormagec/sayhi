import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { usePageActions } from '@/contexts/page-context';

export default function ForgotPassword({ status }: { status?: string }) {
    const { t } = useTranslation();
    const { setAuthInfo } = usePageActions();

    useEffect(() => {
        setAuthInfo(t('Forgot password'), t('Enter your email to receive a password reset link'));
    }, [setAuthInfo, t]);

    const { data, setData, post, processing, errors } = useForm<Required<{ email: string }>>({
        email: '',
    });

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            <Head title={t('Forgot password')} />

            {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}

            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="email">{t('Email')}</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            autoComplete="off"
                            value={data.email}
                            autoFocus
                            tabIndex={1}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder={t('email@example.com')}
                        />
                        <InputError message={errors.email} />
                    </div>

                    <Button type="submit" className="mt-2 w-full" tabIndex={2} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        {t('Email password reset link')}
                    </Button>
                </div>

                <div className="text-muted-foreground text-center text-sm">
                    {t('Or, return to')}{' '}
                    <TextLink href={route('login')} tabIndex={3}>
                        {t('log in')}
                    </TextLink>
                </div>
            </form>
        </>
    );
}
