'use client';

import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

type LoginForm = z.infer<typeof schema>;

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = async (data: LoginForm) => {
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (res?.ok) {
      // نقش کاربر رو بر اساس ایمیل چک کن (موقتی، برای تست)
      if (data.email === "admin@example.com") {
        router.push("/admin/dashboard");
      } else {
        router.push("/user/dashboard");
      }
    } else {
      setError("ایمیل یا رمز عبور اشتباه است");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
        <h1 className="text-2xl font-bold">ورود</h1>

        <input {...register("email")} placeholder="ایمیل" className="w-full border p-2" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input {...register("password")} type="password" placeholder="رمز عبور" className="w-full border p-2" />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        {error && <p className="text-red-600">{error}</p>}

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          ورود
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
