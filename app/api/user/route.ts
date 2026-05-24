import { usersTable } from "@/config/schema";
import { db } from "@/config/db";
import { eq } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const user = await currentUser();

  if (!user) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 401 }
    );
  }

  const email = user.primaryEmailAddress?.emailAddress;

  if (!email) {
    return NextResponse.json(
      { error: "Email not found" },
      { status: 400 }
    );
  }

  // Verifica se usuário já existe
  const users = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  // Se não existir, cria
  if (users.length === 0) {

    const newUser = await db
      .insert(usersTable)
      .values({
        email: email,
        name: user.fullName ?? "",
      })
      .returning();

    return NextResponse.json(newUser[0]);
  }

  // Retorna usuário existente
  return NextResponse.json(users[0]);
}