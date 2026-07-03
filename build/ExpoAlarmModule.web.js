import { registerWebModule, NativeModule } from "expo";
class ExpoAlarmModule extends NativeModule {
    async getPermissionsAsync() {
        return this.unavailablePermission();
    }
    async requestPermissionsAsync() {
        return this.unavailablePermission();
    }
    async openAlarmSettingsAsync() {
        return false;
    }
    async scheduleAlarmAsync(_alarm) {
        throw new Error("react-native-alarm-scheduler is only available on Android and iOS.");
    }
    async cancelAlarmAsync(_id) {
        return false;
    }
    async getScheduledAlarmsAsync() {
        return [];
    }
    async getCurrentAlarmContextAsync() {
        return null;
    }
    async getPendingAlarmActionsAsync() {
        return [];
    }
    async clearPendingAlarmActionsAsync(_ids) { }
    async getPendingNativeAlarmHandoffAsync() {
        return null;
    }
    async clearPendingNativeAlarmHandoffAsync() { }
    async completeNativeAlarmAsync(_alarmId) { }
    async scheduleNativeAlarmBackupAsync(alarmId, delaySeconds = 0.1) {
        return {
            alarmId,
            backupAlarmId: "",
            scheduled: false,
            delaySeconds,
        };
    }
    async cancelNativeAlarmBackupAsync(_alarmId) {
        return false;
    }
    async clearBypassAsync(_alarmId) { }
    async resetNativeAlarmCompletionAsync(_alarmId) { }
    async getNativeAlarmDebugStateAsync(alarmId) {
        return {
            alarmId,
            isComplete: false,
            activeRetryAlarmIds: [],
            pendingActions: [],
            pendingHandoff: null,
            intentDebugCounts: {},
            currentContext: null,
            alertActionMode: "default",
            stopButtonIncluded: false,
            secondaryButtonIncluded: false,
            secondaryButtonBehavior: "none",
            stopIntentBehavior: "recordOnly",
            alertInitializer: "legacyStopButton",
            runtimeSupportsSecondaryOnlyAlert: false,
            sound: "default",
        };
    }
    async setSystemAlarmAsync(_alarm) {
        throw new Error("System alarms are only available on Android.");
    }
    async openSystemAlarmAppAsync() {
        return false;
    }
    unavailablePermission() {
        return {
            platform: "ios",
            status: "unavailable",
            canScheduleExactAlarms: false,
            canOpenSettings: false,
        };
    }
}
export default registerWebModule(ExpoAlarmModule, "ExpoAlarm");
//# sourceMappingURL=ExpoAlarmModule.web.js.map