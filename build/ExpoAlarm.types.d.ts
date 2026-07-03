export type AlarmAuthorizationStatus = "authorized" | "denied" | "notDetermined" | "unavailable" | "unknown";
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
    secondaryButtonBehavior?: "openApp" | "recordOnly" | "none";
    soundName?: string;
  // coloredstone(spec-045): 잠금화면 틴트 hex(현재 테마 모드 accent). 미지정=시스템 accentColor.
  tintColorHex?: string;
  // coloredstone(spec-045): 지정 시 고정시각 대신 카운트다운형(timer) 예약 — countdown 상태가
  // 생겨 잠금화면/Dynamic Island Live Activity가 노출된다(스누즈 대기 화면 경로).
  countdownDurationSeconds?: number;
};
export type AlarmActionType = "nativeStop" | "secondaryOpen" | "snooze" | "dismiss";
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
export type AlarmContextState = "scheduled" | "alerting" | "countdown" | "paused";
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
    secondaryButtonBehavior?: "openApp" | "recordOnly" | "none";
    stopIntentBehavior?: "recordOnly" | "openApp" | "rescheduleImmediate";
    alertInitializer?: "secondaryOnly" | "legacyStopButton";
    runtimeSupportsSecondaryOnlyAlert?: boolean;
    sound?: "default" | "named";
    soundName?: string;
};
export type NativeAlarmBackupResult = {
    alarmId: string;
    backupAlarmId: string;
    scheduled: boolean;
    scheduledFor?: number;
    delaySeconds: number;
};
//# sourceMappingURL=ExpoAlarm.types.d.ts.map