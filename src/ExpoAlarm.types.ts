export type AlarmAuthorizationStatus =
  | "authorized"
  | "denied"
  | "notDetermined"
  | "unavailable"
  | "unknown";

export type AlarmPermissionResponse = {
  platform: "android" | "ios";
  status: AlarmAuthorizationStatus;
  canScheduleExactAlarms: boolean;
  canOpenSettings: boolean;
};

export type ExpoAlarmModuleEvents = {
  onAlarmTriggered: (alarm: ScheduledAlarm) => void;
  onAlarmAction: (action: AlarmAction) => void;
  onAlarmStateChange: (event: AlarmStateChange) => void;
};

export type AlarmWeekday = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type AlarmMetadataValue = string | number | boolean;

export type AlarmMetadata = Record<string, AlarmMetadataValue>;

export type IosAlarmOptions = {
  metadata?: AlarmMetadata;
  alertTitle?: string;
  alertActionMode?: "default" | "openMissionOnly";
  stopButtonTitle?: string;
  secondaryButtonTitle?: string;
  countdownTitle?: string;
  stopIntentBehavior?: "recordOnly" | "openApp" | "rescheduleImmediate";
  // coloredstone(spec-057 rev2): "countdown" = secondary 탭이 iOS 네이티브 스누즈(시스템
  // 카운트다운 전환). snoozeDurationSeconds와 항상 쌍으로 보낸다.
  secondaryButtonBehavior?: "openApp" | "recordOnly" | "none" | "countdown";
  soundName?: string;
  // coloredstone(spec-045): 잠금화면 틴트 hex(현재 테마 모드 accent). 미지정=시스템 accentColor.
  tintColorHex?: string;
  // coloredstone(spec-045): 지정 시 고정시각 대신 카운트다운형(timer) 예약 — countdown 상태가
  // 생겨 잠금화면/Dynamic Island Live Activity가 노출된다(스누즈 대기 화면 경로).
  countdownDurationSeconds?: number;
  // coloredstone(spec-057 rev2): 네이티브 스누즈 길이(postAlert 초). "countdown" behavior와 쌍.
  snoozeDurationSeconds?: number;
};

export type AlarmActionType =
  | "nativeStop"
  | "secondaryOpen"
  | "dismiss";

export type AlarmAction = {
  id: string;
  alarmId: string;
  action: AlarmActionType;
  timestamp: number;
  foregroundRequested?: boolean;
  rescheduled?: boolean;
  rescheduledAlarmId?: string;
  retryScheduledFor?: number;
  backupAlarmId?: string;
  backupScheduledFor?: number;
  backupDelaySeconds?: number;
};

export type AlarmScheduleInput = {
  id?: string;
  hour: number;
  minute: number;
  title?: string;
  weekdays?: AlarmWeekday[];
  timestamp?: number;
  showUi?: boolean;
  ios?: IosAlarmOptions;
};

export type ScheduledAlarm = {
  id: string;
  hour: number;
  minute: number;
  title: string;
  weekdays: AlarmWeekday[];
  timestamp: number;
  platform: "android" | "ios";
  metadata?: AlarmMetadata;
};

export type AlarmContextState =
  | "scheduled"
  | "alerting"
  | "countdown"
  | "paused";

export type AlarmContext = {
  id: string;
  metadata?: AlarmMetadata;
  state?: AlarmContextState;
  nativeAlarmId?: string;
};

export type AlarmStateChange = {
  id: string;
  state: AlarmContextState;
  timestamp: number;
  // coloredstone(P0 후속③): 백업알람(rescheduleImmediate, 마스킹 UUID)일 때 네이티브가 복원해
  // 실어주는 원본 alarmId. JS는 이것을 우선 사용해 원래 알람의 미션을 인계한다.
  originalAlarmId?: string;
  metadata?: AlarmMetadata;
};

export type NativeAlarmDebugState = {
  alarmId: string;
  isComplete: boolean;
  activeRetryAlarmIds: string[];
  pendingActions: AlarmAction[];
  pendingHandoff?: AlarmAction | null;
  intentDebugCounts?: Record<string, number>;
  currentContext: AlarmContext | null;
  alertActionMode?: "default" | "openMissionOnly";
  stopButtonIncluded?: boolean;
  secondaryButtonIncluded?: boolean;
  secondaryButtonBehavior?: "openApp" | "recordOnly" | "none" | "countdown";
  stopIntentBehavior?: "recordOnly" | "openApp" | "rescheduleImmediate";
  alertInitializer?: "secondaryOnly" | "legacyStopButton";
  runtimeSupportsSecondaryOnlyAlert?: boolean;
  sound?: "default" | "named";
  soundName?: string;
  // coloredstone(spec-057 rev2): 네이티브 스누즈 구성 시 postAlert 초(debugState 정직 노출).
  snoozeCountdownSeconds?: number;
};

export type NativeAlarmBackupResult = {
  alarmId: string;
  backupAlarmId: string;
  scheduled: boolean;
  scheduledFor?: number;
  delaySeconds: number;
};
