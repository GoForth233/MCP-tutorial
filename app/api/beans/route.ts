import { NextResponse } from "next/server";

import { createServiceRoleClient } from "@/lib/supabase/service-role";

export async function GET() {
  try {
    const supabase = createServiceRoleClient();

    const { data, error } = await supabase
      .from("beans")
      .select(
        "id, name, flavor_profile, origin, tags, image_url, created_at",
      )
      .order("created_at", { ascending: false });

    if (error) {
      console.error("[GET /api/beans] Supabase error:", error);
      return NextResponse.json(
        { error: "获取咖啡豆数据失败，请稍后再试。" },
        { status: 500 },
      );
    }

    return NextResponse.json({ data: data ?? [] });
  } catch (error) {
    console.error("[GET /api/beans] Unexpected error:", error);
    return NextResponse.json(
      { error: "服务器开小差了，请稍后再试。" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, flavor_profile, origin, tags, image_url } = body;

    // 验证必填字段
    if (!name || !flavor_profile || !origin || !image_url) {
      return NextResponse.json(
        { error: "请填写所有必填字段" },
        { status: 400 },
      );
    }

    // 验证标签数组
    if (!Array.isArray(tags) || tags.length === 0) {
      return NextResponse.json(
        { error: "至少需要添加一个标签" },
        { status: 400 },
      );
    }

    // 验证图片URL格式
    try {
      new URL(image_url);
    } catch {
      return NextResponse.json(
        { error: "请输入有效的图片URL" },
        { status: 400 },
      );
    }

    const supabase = createServiceRoleClient();

    const { data, error } = await supabase
      .from("beans")
      .insert({
        name,
        flavor_profile,
        origin,
        tags,
        image_url,
      })
      .select()
      .single();

    if (error) {
      console.error("[POST /api/beans] Supabase error:", error);
      return NextResponse.json(
        { error: "保存咖啡豆数据失败，请稍后再试。" },
        { status: 500 },
      );
    }

    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    console.error("[POST /api/beans] Unexpected error:", error);
    return NextResponse.json(
      { error: "服务器开小差了，请稍后再试。" },
      { status: 500 },
    );
  }
}
