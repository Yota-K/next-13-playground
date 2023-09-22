# next-13-playground

## prismaメモ

### マイグレーション

```sh
npx prisma migrate dev --name init
```

- name: migrationファイルを出力するディレクトリ名を指定する

**initの場合**

```
.
├── migrations
│  ├── 20230922071422_init
│  │  └── migration.sql
│  ├── 20230922071632_init
│  │  └── migration.sql
│  └── migration_lock.toml
```

### データベースを操作するためのGUI(localhost:5555)が起動する

```sh
npx prisma studio
```

**所感**

大量にデータをインサートするなどの用途には向かないが、手元で軽く試すとかは便利そう
