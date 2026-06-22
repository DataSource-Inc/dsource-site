import config from "@payload-config";
import { getPayload } from "payload";

const email = process.env.PAYLOAD_SEED_ADMIN_EMAIL;
const password = process.env.PAYLOAD_SEED_ADMIN_PASSWORD;

if (!email || !password) {
  throw new Error(
    "Set PAYLOAD_SEED_ADMIN_EMAIL and PAYLOAD_SEED_ADMIN_PASSWORD before running seed:admin.",
  );
}

const payload = await getPayload({ config });

const existing = await payload.find({
  collection: "users",
  depth: 0,
  limit: 1,
  where: {
    email: {
      equals: email,
    },
  },
});

if (existing.docs[0]) {
  payload.logger.info(`Admin user already exists: ${email}`);
} else {
  await payload.create({
    collection: "users",
    data: {
      email,
      password,
      roles: ["admin"],
    },
  });

  payload.logger.info(`Created admin user: ${email}`);
}
