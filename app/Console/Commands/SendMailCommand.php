<?php

namespace App\Console\Commands;

use App\Mail\WelcomeMail;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class SendMailCommand extends Command
{
    // Имя команды
    protected $signature = 'mail:send {user_id : ID пользователя} {--queue=default : Очередь для отправки}';

    // Описание команды
    protected $description = 'Отправить письмо пользователю';

    public function handle()
    {
        $userId = $this->argument('user_id');
        $user = User::find($userId);

        if (! $user) {
            $this->error("Пользователь с ID {$userId} не найден");

            return 1;
        }

        try {
            // Отправка письма
            Mail::to($user->email)->send(new WelcomeMail($user));

            $this->info("✅ Письмо отправлено пользователю {$user->email}");

            if ($this->option('queue')) {
                $this->info("📨 Отправлено через очередь: {$this->option('queue')}");
            }

            return 0;
        } catch (\Exception $e) {
            $this->error('❌ Ошибка: '.$e->getMessage());

            return 1;
        }
    }
}
