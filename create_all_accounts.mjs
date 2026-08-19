/**
 * create_all_accounts.mjs — creates every ImpactLens account in Supabase in
 * one run: the real Auth login (email+password) AND the matching profiles
 * row (name, role, manager). Safe to re-run — accounts that already exist
 * are skipped, not duplicated.
 *
 * ── HOW TO RUN (no local install needed — easiest: GitHub Codespaces) ──────
 * Since you're already putting this project on GitHub:
 *   1. On your GitHub repo page, click the green "Code" button → "Codespaces"
 *      tab → "Create codespace on main". This opens a full VS Code + terminal
 *      in your BROWSER, nothing to install.
 *   2. Upload this file into that Codespace (drag-and-drop into the file
 *      panel), or paste its contents into a new file there.
 *   3. Fill in SUPABASE_URL and SUPABASE_SECRET_KEY below (from Supabase →
 *      Settings → API Keys — the "Secret key", NOT the publishable one).
 *   4. In the Codespace terminal, run:
 *        npm install @supabase/supabase-js
 *        node create_all_accounts.mjs
 *   5. Read the summary it prints. Re-run any time — already-created
 *      accounts are skipped automatically.
 *
 * (If you'd rather run this on your own computer: install Node.js from
 * nodejs.org, then the same two commands in Step 4 above, from a folder
 * containing this file.)
 * ────────────────────────────────────────────────────────────────────────── */

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://vtjvucrnczdekaxpbfsy.supabase.co";
const SUPABASE_SECRET_KEY = "PASTE_YOUR_SECRET_KEY_HERE"; // Settings -> API Keys -> Secret key (sb_secret_...)

if (SUPABASE_SECRET_KEY === "PASTE_YOUR_SECRET_KEY_HERE") {
  console.error("Edit this file first: paste your Supabase Secret key into SUPABASE_SECRET_KEY.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SECRET_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

// Embedded directly from roster_review.csv so this is a single self-contained file.
const ROSTER = [
  { username: 'fm001', password: 'CE#NgUrsD3hmNr', name: 'Ali Maher Assem Mohamed', role: 'participant', isTest: false },
  { username: 'fm002', password: 'YY5CTHQVkmy#A6', name: 'Ahmed EL-Sayed EL-Sayed AL-Nashar', role: 'participant', isTest: false },
  { username: 'fm003', password: 'pAwTtSQdyTWVdH', name: 'Ahmed Moustafa Ahmed Abd El-Sadek', role: 'participant', isTest: false },
  { username: 'fm004', password: 'THM4xuveBwYKMc', name: 'Ahmed El Sayed Abdel Monem Sayed', role: 'participant', isTest: false },
  { username: 'fm005', password: 'pSzY4zNsQkpJ3U', name: 'Ahmed Mohamed Wagdy Abdel Ghany', role: 'participant', isTest: false },
  { username: 'fm006', password: 'JsYyQ7wVjEvHFU', name: 'Ahmed Tarek Abdelaziz Ibrahim', role: 'participant', isTest: false },
  { username: 'fm007', password: 'IK9bunh3zMEFYr', name: 'Alaa Mohamed Abd El Salam Ahmed', role: 'participant', isTest: false },
  { username: 'fm008', password: 'ku8RpSS4eZnvIQ', name: 'Amr Mohamed Reda AbdelHamid', role: 'participant', isTest: false },
  { username: 'fm009', password: '4zGmFTkkxDTQyb', name: 'Azza Othman Mahmoud Othman Ali', role: 'participant', isTest: false },
  { username: 'fm010', password: 'yk@38jTXSc3Y8C', name: 'Bassem Sayed AbdelRahman Mohamed', role: 'participant', isTest: false },
  { username: 'fm011', password: 'KyVka@WmScENfD', name: 'Hussien Mahmoud Ahmed Ali Hefny', role: 'participant', isTest: false },
  { username: 'fm012', password: 'jSg7jqrherQQtS', name: 'Karim Mahmoud Hassan Mohamed Hassan', role: 'participant', isTest: false },
  { username: 'fm013', password: 'Gmhc8Sgme2TdjU', name: 'Khaled Sheta Mohamed Said Sheta', role: 'participant', isTest: false },
  { username: 'fm014', password: 'C4gs@fnmYFQldS', name: 'Ahmed Abdelhafiz Srour', role: 'participant', isTest: false },
  { username: 'fm015', password: 'sb9aZTvETJmSna', name: 'Mahmoud Hefny Abd El Aliem Hefny', role: 'participant', isTest: false },
  { username: 'fm016', password: 'aPgG6Vn6H8WG6A', name: 'Mahmoud Ismaiel', role: 'participant', isTest: false },
  { username: 'fm017', password: 'YGD6a8T9Kkglwu', name: 'Mahmoud Mohamed Mohamed Abd Allah', role: 'participant', isTest: false },
  { username: 'fm018', password: '4vDdIBYMh4ZVwg', name: 'Samer Samir EL-Amry Seha', role: 'participant', isTest: false },
  { username: 'fm019', password: 'hng9JvG@C9u#4n', name: 'Ahmed Mohamed Moursy Ahmed', role: 'participant', isTest: false },
  { username: 'fm020', password: 'U4TeF3Yd9d88wk', name: 'Ahmed Mohamed Halim Lotfy', role: 'participant', isTest: false },
  { username: 'fm021', password: '4vDdIBYMh4ZVwg', name: 'Ahmed Zaki Mahmoud Shoukry Abdelbakki', role: 'participant', isTest: false },
  { username: 'fm022', password: 'Kk@E99nN7VtCV', name: 'Anas Ahmed Rashad Ahmed', role: 'participant', isTest: false },
  { username: 'fm023', password: 'kUHB6RuWWBwjh', name: 'Yara AbdelHalim Mohamed Abdelhalim Mansour', role: 'participant', isTest: false },
  { username: 'fm024', password: '72DJAseGwKWB9D', name: 'Bassem Mohamed Mohamed Abdelraheem', role: 'participant', isTest: false },
  { username: 'fm025', password: 'VX8NePpd9ZF4dN', name: 'Ahmed Abdel-Fadel Abou-Taleb Abdel-Fadel', role: 'participant', isTest: false },
  { username: 'test001', password: 'h2Qhpqvj/dRuYX', name: 'Test Participant 1', role: 'participant', isTest: true },
  { username: 'test002', password: 'fI82JkVGcJGD9y', name: 'Test Participant 2', role: 'participant', isTest: true },
  { username: 'test003', password: 'A7Xsb4f#N9G0hX', name: 'Test Participant 3', role: 'participant', isTest: true },
  { username: 'test004', password: 'MCJEg5V5U@kXsH', name: 'Test Participant 4', role: 'participant', isTest: true },
  { username: 'test005', password: 'ekKE4tySkX9guP', name: 'Test Participant 5', role: 'participant', isTest: true },
  { username: 'admin001', password: 'qb7rRxsNXDJDy6', name: 'Program Manager', role: 'manager', isTest: false }
];

function emailFor(username) {
  return `${username}@living-leadership.internal`;
}

async function ensureManagerId() {
  const { data, error } = await supabase.from("profiles").select("id").eq("username", "admin001").maybeSingle();
  if (error) throw error;
  return data ? data.id : null;
}

async function main() {
  let created = 0, skipped = 0, failed = 0;

  for (const person of ROSTER) {
    const email = emailFor(person.username);

    // 1) Create the Auth login (skip cleanly if it already exists).
    const { data: authData, error: authErr } = await supabase.auth.admin.createUser({
      email,
      password: person.password,
      email_confirm: true, // equivalent of "Auto Confirm User" in the dashboard
    });

    let userId;
    if (authErr) {
      if (String(authErr.message || "").toLowerCase().includes("already")) {
        // Already created earlier (e.g. a previous partial run) -- look up the id instead.
        const { data: list } = await supabase.auth.admin.listUsers();
        const existing = list?.users?.find(u => u.email === email);
        if (!existing) { console.error(`FAILED (couldn't recover id): ${person.username} -- ${authErr.message}`); failed++; continue; }
        userId = existing.id;
        skipped++;
      } else {
        console.error(`FAILED: ${person.username} -- ${authErr.message}`);
        failed++;
        continue;
      }
    } else {
      userId = authData.user.id;
      created++;
    }

    // 2) Create/refresh the matching profiles row.
    const { error: profErr } = await supabase.from("profiles").upsert({
      id: userId,
      username: person.username,
      name: person.name,
      role: person.role,
      is_test: person.isTest,
    }, { onConflict: "id" });
    if (profErr) console.error(`  profile upsert failed for ${person.username}: ${profErr.message}`);
  }

  // 3) Put every real (non-test) participant under the same manager.
  const managerId = await ensureManagerId();
  if (managerId) {
    const { error: mgrErr } = await supabase.from("profiles")
      .update({ manager_id: managerId })
      .eq("role", "participant").eq("is_test", false);
    if (mgrErr) console.error("manager assignment failed:", mgrErr.message);
  } else {
    console.warn("admin001 profile not found yet -- run this script again after it's created.");
  }

  // 4) Re-link any engagement rows inserted before their profile existed.
  const { data: unlinked } = await supabase.from("engagement").select("id, participant_name").is("participant_id", null);
  for (const row of unlinked || []) {
    const { data: match } = await supabase.from("profiles").select("id").eq("name", row.participant_name).maybeSingle();
    if (match) await supabase.from("engagement").update({ participant_id: match.id }).eq("id", row.id);
  }

  console.log(`\nDone. Created: ${created}, already existed: ${skipped}, failed: ${failed}, total in roster: ${ROSTER.length}`);
}

main().catch(e => { console.error("Script error:", e); process.exit(1); });
