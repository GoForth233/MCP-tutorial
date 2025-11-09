"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const beanFormSchema = z.object({
  name: z.string().min(1, "咖啡名称不能为空"),
  flavor_profile: z.string().min(1, "口味描述不能为空"),
  origin: z.string().min(1, "产地不能为空"),
  tags: z.array(z.string()).min(1, "至少需要一个标签"),
  image_url: z.string().url("请输入有效的图片URL"),
});

type BeanFormValues = z.infer<typeof beanFormSchema>;

interface AddBeanDialogProps {
  onSuccess?: () => void;
}

export function AddBeanDialog({ onSuccess }: AddBeanDialogProps) {
  const [open, setOpen] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BeanFormValues>({
    resolver: zodResolver(beanFormSchema),
    defaultValues: {
      name: "",
      flavor_profile: "",
      origin: "",
      tags: [],
      image_url: "",
    },
  });

  const tags = form.watch("tags");

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      form.setValue("tags", [...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    form.setValue(
      "tags",
      tags.filter((tag) => tag !== tagToRemove),
    );
  };

  const onSubmit = async (data: BeanFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/beans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "保存失败");
      }

      form.reset();
      setTagInput("");
      setOpen(false);
      onSuccess?.();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(error instanceof Error ? error.message : "保存失败，请稍后再试");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 监听表单字段变化以实时验证
  const watchedFields = form.watch();
  const formErrors = form.formState.errors;
  
  // 检查所有必填字段是否已填写且无错误
  const isFormValid = 
    watchedFields.name?.trim() &&
    watchedFields.flavor_profile?.trim() &&
    watchedFields.origin?.trim() &&
    watchedFields.tags?.length > 0 &&
    watchedFields.image_url?.trim() &&
    !formErrors.name &&
    !formErrors.flavor_profile &&
    !formErrors.origin &&
    !formErrors.tags &&
    !formErrors.image_url;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-8 right-8 h-14 w-14 rounded-full shadow-lg hover:shadow-xl z-50 bg-[#f9c06a] text-[#1e1e1e] hover:bg-[#f9c06a]/90"
          size="icon"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl">添加咖啡豆</DialogTitle>
          <DialogDescription className="font-playfair">
            填写以下信息来添加新的咖啡豆
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-playfair">咖啡名称 *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="例如：哥伦比亚咖啡"
                      className="font-playfair"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="flavor_profile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-playfair">口味描述 *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="描述咖啡的口味特点..."
                      className="font-playfair min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="origin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-playfair">产地 *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="例如：哥伦比亚"
                      className="font-playfair"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={() => (
                <FormItem>
                  <FormLabel className="font-playfair">标签 *</FormLabel>
                  <div className="flex gap-2">
                    <Input
                      placeholder="输入标签后按回车添加"
                      className="font-playfair"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addTag();
                        }
                      }}
                    />
                    <Button
                      type="button"
                      onClick={addTag}
                      variant="outline"
                      className="font-playfair"
                    >
                      添加
                    </Button>
                  </div>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tags.map((tag) => (
                        <div
                          key={tag}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-[#fff9f1] border border-[rgba(249,192,106,0.42)] rounded-full text-sm font-playfair"
                        >
                          <span>{tag}</span>
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="ml-1 hover:text-destructive"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <FormDescription className="font-playfair">
                    至少需要添加一个标签
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-playfair">图片URL *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com/image.jpg"
                      type="url"
                      className="font-playfair"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="font-playfair">
                    请输入有效的图片URL链接
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="font-playfair"
              >
                取消
              </Button>
              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="font-playfair bg-[#f9c06a] text-[#1e1e1e] hover:bg-[#f9c06a]/90"
              >
                {isSubmitting ? "提交中..." : "提交"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

