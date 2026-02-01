{
  pkgs, ...
}: {
  channel = "stable-23.11";
  packages = [pkgs.nodejs_20];

  idx.workspace.onStart = {
    web = "npm run dev -- --port=${pkgs.lib.escapeShellArg "$PORT"} --host 0.0.0.0";
  };
}
