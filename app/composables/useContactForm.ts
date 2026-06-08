interface ContactForm {
  name: string;
  mail: string;
  phone: string;
  message: string;
  privacyCheck: boolean;
  honeypot: string;
}

interface ContactResponse {
  success?: boolean;
  message?: string;
}

export function useContactForm() {
  const form = ref<ContactForm>({
    name: "",
    mail: "",
    phone: "",
    message: "",
    privacyCheck: false,
    honeypot: " ",
  });

  const isLoading = ref(false);
  const successMessage = ref("");
  const errorMessage = ref("");

  async function sendMail() {
    successMessage.value = "";
    errorMessage.value = "";
    isLoading.value = true;

    try {
      const response = await $fetch<ContactResponse>("/api/contact", {
        method: "POST",
        body: form.value,
      });

      if (response.success) {
        successMessage.value = response.message || "Your message has been sent successfully!";
        form.value = { name: "", mail: "", phone: "", message: "", privacyCheck: false, honeypot: form.value.honeypot };
        setTimeout(() => { successMessage.value = ""; }, 5000);
      }
    } catch (error: unknown) {
      const err = error as { data?: { statusMessage?: string } };
      errorMessage.value = err.data?.statusMessage || "Failed to send your message. Please try again.";
      setTimeout(() => { errorMessage.value = ""; }, 5000);
    } finally {
      isLoading.value = false;
    }
  }

  return { form, isLoading, successMessage, errorMessage, sendMail };
}
