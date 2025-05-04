"use client";

import { ProfileForm } from "./_ui/profile-form";
import { Spinner } from "@/shared/ui/spinner";

export function ProfileFormContainer({
  userId,
  callbackUrl,
}: {
  userId: string;
  callbackUrl?: string;
}) {
  if (false) {
    return <Spinner aria-label="Загрузка профиля" />;
  }

  if (false) {
    return <div>Не удалось загрузить профиль, возможно у вас нет прав</div>;
  }

  return (
    <ProfileForm
      onSuccess={() => {}}
      submitText={callbackUrl ? "Продолжить" : "Сохранить"}
    />
  );
}
