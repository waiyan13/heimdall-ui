import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginPrompts } from "@/config/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formschema = z.object({
  email: z.coerce.string().trim().email({ message: LoginPrompts.email }),
  password: z.coerce.string().trim().min(8, { message: LoginPrompts.password }),
});

function Login() {
  const form = useForm<z.infer<typeof formschema>>({
    resolver: zodResolver(formschema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: z.infer<typeof formschema>) => {
    console.log(data.email);
  };

  return (
    <div className="flex h-dvh">
      <div className="flex w-1/2 flex-col justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="text-center font-display text-8xl text-slate-50">
          Heimdall
        </h1>
      </div>

      <div className="flex w-1/2 flex-col justify-center">
        <Card className="mx-auto w-1/2">
          <CardHeader className="text-center font-display text-2xl">
            <CardTitle>Welcome Back</CardTitle>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form
                className="space-y-6"
                id="login"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input required={true} {...field} />
                      </FormControl>
                      {form.formState.errors.email ? (
                        <FormMessage>
                          {form.formState.errors.email.message}
                        </FormMessage>
                      ) : (
                        <FormMessage> </FormMessage>
                      )}
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <div className="flex">
                        <FormControl>
                          <Input
                            required={true}
                            type={showPassword ? "text" : "password"}
                            {...field}
                          />
                        </FormControl>
                        <Button
                          className="ml-2"
                          onClick={() => setShowPassword((prev) => !prev)}
                          size="icon"
                          type="button"
                          variant="ghost"
                        >
                          {showPassword ? <Eye /> : <EyeClosed />}
                        </Button>
                      </div>
                      {form.formState.errors.email ? (
                        <FormMessage>
                          {form.formState.errors.email.message}
                        </FormMessage>
                      ) : (
                        <FormMessage> </FormMessage>
                      )}
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>

          <CardFooter>
            <Button className="w-full" form="login" type="submit">
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Login;
